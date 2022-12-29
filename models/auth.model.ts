export interface IRegisterUser {
    email: string
    password: string
    fullName: string
    token: any
}

export interface ILoginUser {
    emailPhone: string
    password: string
    token: any
}
export interface IVerifyUser {
    emailPhone: string
    code: number
}

export interface IForgetPass {
    email: string
    token: any
}

export interface IResetPass {
    resetToken: string
    password: string
    token: any
}