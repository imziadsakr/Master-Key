

const ActionTypes = {
   
    // auth action types
    SignOutUser : "SignOutUser",
    SignUpUser : "SignUpUser",
    SignUpUserError : 'SignUpUserError' ,
    SignInUser : "SignInUser" ,
    SignInUserError : "SignInUserError" ,
    ConfirmUser : "ConfirmUser" ,
    ConfirmUserError : "ConfirmUserError" ,
    Profile : "Profile" ,
    ProfileError : "ProfileError",
    ProfileEdit : "ProfileEdit" ,
    ProfileEditError : "ProfileEditError",
    ClearAuthError : "ClearAuthError" ,

    // exchange action types
    CryptoPairList : "CryptoPairList",
    CryptoPairListError : "CryptoPairListError",

    CryptoOrderList : "CryptoOrderList",
    CryptoOrderListError : "CryptoOrderListError",

    MarketTradeList : "MarketTradeList" ,
    MarketTradeListError : "MarketTradeListError" ,

    UserOrderList : "UserOrderList" ,
    UserOrderListError : 'UserOrderListError' ,

    CryptoExchange : "CryptoExchange",
    CryptoExchangeError : "CryptoExchangeError",

    CryptoAddOrder : 'CryptoAddOrder',
    CryptoAddOrderError : 'CryptoAddOrderError',

    // wallet action types
    ExchangeDepositHistory : "ExchangeDepositHistory",
    ExchangeDepositHistoryError : "ExchangeDepositHistoryError"
}

export default ActionTypes ;