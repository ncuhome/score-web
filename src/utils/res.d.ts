interface IData {
  reach_date: string;
  reach_start_time: string;
  reach_end_time: string;

  // 基本信息
  origin: string;
  destination: string;

  // 交通信息
  vehicle_type: string;
  vehicle_info: string;
  transit?: string;
  vehicle_arrive_time: string;

  // 校区
  campus: string;
}
