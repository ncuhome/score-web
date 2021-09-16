import React, { useState } from 'react';
import { WingBlank, Card, SegmentedControl, Tabs, List, Toast } from 'antd-mobile';
import dataModule from 'mincu-data';
import network from 'mincu-network';
import store from '@/store';
import get from 'lodash.get';
import { useAppReady } from 'mincu-hooks';
import axios from 'axios';
import './style.css'

const Item = List.Item;
const Brief = Item.Brief;

function Header() {
  const [state, userDispatchers] = store.useModel('common');
  const { initialStatus } = userDispatchers;
  const isReady = useAppReady()
  // const [grade, setGrade] = useState(0)
  // const [term, setTerm] = useState('')
  const [listElement, setList] = useState((<></>))
  const [res, setRes] = useState({
    "terms_gpa": {
      "2020-2021-1": "3.458",
      "2020-2021-2": "3.322"
    },
    "xh": "5504120045",
    "msg": "完成",
    "total": 3,
    "terms": [
      "2020-2021-0",
      "2020-2021-1",
      "2020-2021-2"
    ],
    "scores": [
      [
        {
          "exam_type": "通过制",
          "score": 75,
          "include": false,
          "lesson_name": "军事技能训练",
          "course_type": "公共基础课",
          "grade_point": 2.7,
          "lesson_type": "必修",
          "term": "2020-2021-0",
          "credit": 2.0
        }
      ],
      [
        {
          "exam_type": "正常考试",
          "score": 85,
          "include": true,
          "lesson_name": "军事理论",
          "course_type": "公共基础课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 88,
          "include": true,
          "lesson_name": "物理演示实验",
          "grade_point": 3.7,
          "course_type": "专业选修课",
          "lesson_type": "选修",
          "term": "2020-2021-1",
          "credit": 1.0
        },
        {
          "exam_type": "正常考试",
          "score": 80,
          "include": true,
          "lesson_name": "体育（1）",
          "course_type": "公共基础课",
          "grade_point": 3.0,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 1.0
        },
        {
          "exam_type": "正常考试",
          "score": 91,
          "include": true,
          "lesson_name": "思想道德修养与法律基础",
          "course_type": "公共基础课",
          "grade_point": 4.0,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 3.0
        },
        {
          "exam_type": "正常考试",
          "score": 90,
          "include": true,
          "lesson_name": "普通物理（力学）",
          "course_type": "专业类平台课",
          "grade_point": 4.0,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 4.0
        },
        {
          "exam_type": "正常考试",
          "score": 76,
          "include": true,
          "lesson_name": "高等数学（1）上",
          "course_type": "公共基础课",
          "grade_point": 2.7,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 5.0
        },
        {
          "exam_type": "正常考试",
          "score": 90,
          "include": true,
          "lesson_name": "普通物理（热学）",
          "course_type": "专业类平台课",
          "grade_point": 4.0,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 89,
          "include": true,
          "lesson_name": "形势与政策（1）",
          "course_type": "公共基础课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 0.5
        },
        {
          "exam_type": "正常考试",
          "score": 85,
          "include": true,
          "lesson_name": "学科导论课",
          "course_type": "专业类平台课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 1.0
        },
        {
          "exam_type": "正常考试",
          "score": 74,
          "include": true,
          "lesson_name": "大学英语（1）",
          "course_type": "公共基础课",
          "grade_point": 2.3,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 85,
          "include": true,
          "lesson_name": "大学计算机",
          "course_type": "公共基础课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-1",
          "credit": 2.5
        }
      ],
      [
        {
          "exam_type": "正常考试",
          "score": 81,
          "include": true,
          "lesson_name": "大学英语（2）",
          "grade_point": 3.0,
          "course_type": "专业选修课",
          "lesson_type": "选修",
          "term": "2020-2021-2",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 84,
          "include": true,
          "lesson_name": "形势与政策（2）",
          "course_type": "公共基础课",
          "grade_point": 3.3,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 0.5
        },
        {
          "exam_type": "正常考试",
          "score": 82,
          "include": true,
          "lesson_name": "普通物理（光学）",
          "course_type": "专业类平台课",
          "grade_point": 3.3,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 4.0
        },
        {
          "exam_type": "正常考试",
          "score": 85,
          "include": true,
          "lesson_name": "普通物理实验（1）",
          "course_type": "专业类平台课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 74,
          "include": true,
          "lesson_name": "大学生心理健康指导",
          "course_type": "公共基础课",
          "grade_point": 2.3,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 84,
          "include": true,
          "lesson_name": "高等数学（1）下",
          "course_type": "公共基础课",
          "grade_point": 3.3,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 5.0
        },
        {
          "exam_type": "正常考试",
          "score": 90,
          "include": true,
          "lesson_name": "英语口译技巧",
          "grade_point": 4.0,
          "course_type": "通识课（Ⅱ类）",
          "lesson_type": "公选",
          "term": "2020-2021-2",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 82,
          "include": true,
          "lesson_name": "大学生职业发展与就业指导",
          "course_type": "创新创业教育课",
          "grade_point": 3.3,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 1.0
        },
        {
          "exam_type": "正常考试",
          "score": 82,
          "include": true,
          "lesson_name": "观影之道：影视艺术赏析",
          "grade_point": 3.3,
          "course_type": "通识课（Ⅱ类）",
          "lesson_type": "公选",
          "term": "2020-2021-2",
          "credit": 2.0
        },
        {
          "exam_type": "正常考试",
          "score": 77,
          "include": true,
          "lesson_name": "普通物理（电磁学）",
          "course_type": "专业类平台课",
          "grade_point": 2.7,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 4.0
        },
        {
          "exam_type": "正常考试",
          "score": 91,
          "include": true,
          "lesson_name": "体育（2）",
          "course_type": "公共基础课",
          "grade_point": 4.0,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 1.0
        },
        {
          "exam_type": "正常考试",
          "score": 87,
          "include": true,
          "lesson_name": "高等代数",
          "course_type": "公共基础课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 4.0
        },
        {
          "exam_type": "正常考试",
          "score": 85,
          "include": true,
          "lesson_name": "中国近现代史纲要",
          "course_type": "公共基础课",
          "grade_point": 3.7,
          "lesson_type": "必修",
          "term": "2020-2021-2",
          "credit": 3.0
        }
      ]
    ],
    "xm": "覃天凤",
    "credits": 58.5,
    "terms_gpa_split": {
      "2020-2021-1": "3.458",
      "2020-2021-2": "3.322"
    },
    "status": 1
  })
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
      alert(res.data.terms_gpa[2020 - 2021 - 1])
      setRes(res.data)
    }).catch(err => {
      // alert(err)
    })
  }, [isReady])

  React.useEffect(() => {
    setList((
      <Tabs tabs={tabs}
        initialPage={0}
      >
        <div className="term0-container">
          <h3 style={{ textAlign: 'center' }}>
            军训不计入GPA
          </h3>
          <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
            {
              res.scores[0].map(item => {
                return (
                  <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                )
              })
            }
          </List>
        </div>


        <div className="term1-container">
          <h3 style={{ textAlign: 'center' }}>
            GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[1]]}</span>
          </h3>
          <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
            {
              res.scores[1].map(item => {
                return (
                  <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                )
              })
            }
          </List>
        </div>

        <div className="term2-container">
          <h3 style={{ textAlign: 'center' }}>
            GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[2]]}</span>
          </h3>
          <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
            {
              res.scores[2].map(item => {
                return (
                  <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                )
              })
            }
          </List>
        </div>
      </Tabs>
    ))
  }, []);//接口好后这里监听res

  const handleGrade = (e) => {
    // setTerm(res.terms[e.nativeEvent.selectedSegmentIndex])
    const index = e.nativeEvent.selectedSegmentIndex
    // 大一
    if (index === 0) {
      setList((
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div className="term0-container">
            <h3 style={{ textAlign: 'center' }}>
              军训不计入GPA
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[0].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>


          <div className="term1-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[1]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[1].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>

          <div className="term2-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[2]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[2].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>
        </Tabs>
      ))
    }

    // 大二
    if (index === 1) {
      if (!res.terms[3]) {
        Toast.info('暂无此成绩', 2, null!, false);
        return
      }
      setList((
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div className="term0-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[3]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[3].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>


          <div className="term1-container">
            GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[4]]}</span>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[4].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>

          <div className="term2-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[5]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[5].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>
        </Tabs>
      ))
    }

    // 大三
    if (index === 2) {
      if (!res.terms[6]) {
        Toast.info('暂无此成绩', 2, null!, false);
        return
      }
      setList((
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div className="term0-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[6]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[3].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>


          <div className="term1-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[7]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[7].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>

          <div className="term2-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[8]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[8].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>
        </Tabs>
      ))
    }

    //大四
    if (index === 3) {
      if (!res.terms[9]) {
        Toast.info('暂无此成绩', 2, null!, false);
        return
      }
      setList((
        <Tabs tabs={tabs}
          initialPage={0}
        >
          <div className="term0-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[9]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[9].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>


          <div className="term1-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[10]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[10].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>

          <div className="term2-container">
            <h3 style={{ textAlign: 'center' }}>
              GPA:<span style={{color:'#1874ff'}}>{res.terms_gpa_split[res.terms[11]]}</span>
            </h3>
            <List renderHeader={() => (<><p>科目<span style={{ float: 'right' }}>学分&nbsp;&nbsp;&nbsp;&nbsp;成绩</span></p></>)} className="my-list">
              {
                res.scores[11].map(item => {
                  return (
                    <Item extra={item.credit + '      ' + item.score}>{item.lesson_name}</Item>
                  )
                })
              }
            </List>
          </div>
        </Tabs>
      ))
    }

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
          {listElement}
        </Card.Body>
        {/* <Card.Footer
          content={
            <>
            </>
          }
        /> */}
      </Card>

      {/* <Card>
        <Card.Body>
        </Card.Body>

      </Card> */}
    </WingBlank>
  );
}

export default Header;
