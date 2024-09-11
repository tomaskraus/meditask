export interface Task {
  caption: string;
  description: string; // a long description of the task
  //   startDate: Date;
  //   endDate: Date;
  //   hourTime: number; // a time (hour) Task should be executed by the user
  //   notificationMinutes: number[]; // each item: remind me a number of minutes before task begins
  //     example: [30, 45] means two reminders: 30 mins before and 45 mins before
  //   /**
  //    * string in cron time syntax
  //    * see https://github.com/kelektiv/node-cron/tree/main
  //    */
  //   schedule: string;
}

export interface TaskWithId extends Task {
  id: string;
}
