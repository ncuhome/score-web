import React, { useState } from 'react';
import { WingBlank, Card, SegmentedControl, Tabs, List, Toast } from 'antd-mobile';
import dataModule from 'mincu-data';
import network from 'mincu-network';
import store from '@/store';
import get from 'lodash.get';
import { useAppReady } from 'mincu-hooks';
import axios from 'axios';
import './style.css'
import { scoresExample } from '@/utils/data';

const Item = List.Item;
const Brief = Item.Brief;

function Header() {
  const [state, userDispatchers] = store.useModel('common');
  const { initialStatus } = userDispatchers;
  const isReady = useAppReady()
  const [gradeIndex, setGrade] = useState(0)
  // const [grade, setGrade] = useState(0)
  // const [term, setTerm] = useState('')
  const [res, setRes] = useState(scoresExample)
  const tabs = [
    { title: '小学期' },
    { title: '上学期' },
    { title: '下学期' },
  ];

  const getName = () => {
    const sex = dataModule.appData.user.profile.entireProfile.base_info.xb.dm ? '👨‍🎓' : '👩‍🎓';
    const { name } = dataModule.appData.user.profile.basicProfile;
    // const sex ='nan'
    // const name = 'qtf'
    return `${sex} ${name}`;
  };

  React.useEffect(() => {
    network.token = dataModule.appData.user.token;
    initialStatus();
  }, []);

  React.useEffect(() => {
    if (!isReady) return;
    // const token = 'eyJhbGciOiJIUzI1NiIsImlhdCI6MTYzMTYxNDAyOCwiZXhwIjoxMTYzMTYxNDAyN30.eyJpZCI6IjMxMjk4NjU1MjkiLCJleHAiOjExNjMxNjE0MDI3LCJ4aCI6IjU1MDQxMjAwNDUifQ.5octy8h_hFb5qI35-HbW-coN0lQ5bDbYZT7HBUBUOKw'
    const token = dataModule.appData.user.token
    axios({
      method: 'GET',
      url: 'http://api.ncuos.com/api/info/scores',
      headers: {
        'Authorization': 'passport ' + token
      }
    }).then(res => {
      // alert(res.data.terms) 
      setRes(res.data)
    }).catch(err => {
      // alert(err)
    })
  }, [isReady])

  const renderList = (gradeIndex) => {
    const termMap = [0, 1, 2]
    let termIndex
    switch (gradeIndex) {
      case 0:
        termIndex = [0, 1, 2]
        break;
      case 1:
        termIndex = [3, 4, 5]
        break;
      case 2:
        termIndex = [6, 7, 8]
        break;
      case 3:
        termIndex = [9, 10, 11]
        break;

      default:
        break;
    }

    return (
      <Tabs tabs={tabs}
        initialPage={0}
      >
        {
          termMap.map(i => {
            return (
              res.terms[termIndex[i]] ?
                (<div className="term0-container">
                  <h3 style={{ textAlign: 'center', marginBottom: '0px' }}>
                    {
                      termIndex[i] === 0 ?
                        '军训不计入GPA' : (<>GPA:<span style={{ color: '#1874ff' }}>{res.terms_gpa_split[res.terms[termIndex[i]]]}</span></>)
                    }
                  </h3>
                  <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;成绩/绩点</span></p></>)} className="my-list">
                    {
                      res.scores[termIndex[i]].map(item => {
                        return (
                          <Item
                            extra={item.credit.toFixed(1) + '     ' + item.score + '/' + item.grade_point.toFixed(1) + ' '}
                            style={{
                              textAlign:'left'
                            }}>
                            {item.lesson_name}
                          </Item>
                        )
                      })
                    }
                  </List>
                </div>) :
                (
                  <div>
                    <h3 style={{ textAlign: 'center' }}>
                      暂无此学期的成绩
                    </h3>
                  </div>
                )

            )

          })
        }
      </Tabs>
    )
  }

  const handleGrade = (e) => {
    setGrade(e.nativeEvent.selectedSegmentIndex)
  }

  return (
    <WingBlank size="md">
      <Card full>
        <Card.Header
          style={{ background: '#1874ff' }}
          title={getName()}
          extra={dataModule.appData.user.profile.basicProfile.department}
        />
        <Card.Body>
          <SegmentedControl
            style={{
              background: '#1874ff',
              marginTop: '-15.5px',
              width: '109.5%',
              height: '38px',
              marginLeft: '-4vw',
              borderRadius: '0 0 15px 15px'
            }}
            selectedIndex={0}
            values={['大一', '大二', '大三', '大四']}
            onChange={handleGrade}
          />
          {renderList(gradeIndex)}
        </Card.Body>
      </Card>
    </WingBlank>
  );
}

export default Header;
