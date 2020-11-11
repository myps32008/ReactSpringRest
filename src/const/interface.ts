
export interface IUserInfo {
    id: number,
    token: string,
    role: number,
    menu: IAccessMenu[],
    loginStatus: boolean,
    loading: boolean
}

export interface IAccessMenu {
    id: number,
    url: string,    
    icon: number,
    name: string
}

export interface IAppStore {
    userInfo: IUserInfo
}