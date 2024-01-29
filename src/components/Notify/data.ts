export interface ListItem {
  avatar?: string
  title: string
  datetime?: string
  description?: string
  status?: "" | "success" | "info" | "warning" | "danger"
  extra?: string
}

export const notifyData: ListItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    title: "上线啦",
    datetime: "两年前",
    description: "上线啦"
  }
]

export const messageData: ListItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "上线啦",
    description: "上线啦",
    datetime: "1988-04-16"
  }
]

export const todoData: ListItem[] = [
  {
    title: "上线啦",
    description: "上线啦",
    extra: "未开始",
    status: "info"
  },
]
