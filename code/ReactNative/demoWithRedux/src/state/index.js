//此处是redux管理的全局状态的初始状态
export const initialState={
    isFetching: false,
    hasLogin:false,
    error:null,
    hasRegister:false,//这个是用来做注册成功后的自动跳转的
    user:{}
};
