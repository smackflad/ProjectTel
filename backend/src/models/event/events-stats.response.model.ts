export class EventStatisticsModel {
  segments: EventStatisticsSegmentModel[];

  totalOrders: number;

  totalRevenue: number;
}

export class EventStatisticsSegmentModel {
  orders: number;

  revenue: number;

  startSegmentDate: string;

  endSegmentDate: string;
}
