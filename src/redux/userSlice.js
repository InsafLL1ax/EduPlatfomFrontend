import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USERS } from "../mock";
import { KEY_AUTHOBJ } from "../constants";

const initialState = {
    authData:null,
    user:{},
}

export const fetchSignUp = createAsyncThunk('user/fetchSignUp', async ({login,password})=>{
    const mockUsers = [...USERS]
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
          const tempCurrUser = mockUsers.find(el=>el.email === login);
          if(tempCurrUser && tempCurrUser.password === password ){
            const tempObj = {id: tempCurrUser.id, token:"araS#HJ789jdsbbf"}
            localStorage.setItem(KEY_AUTHOBJ,JSON.stringify(tempObj));
            resolve(tempObj);
          }else{
            reject(false)
          }
        }, 500)
    })

})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchSignUp.fulfilled, (state, action) => {
            state.authData = action.payload
        }).addCase(fetchSignUp.rejected, (state, action) => {
            state.authData = {error: true}
        })
    }
})

export default userSlice.reducer
export const authDataSelector = state => state.user.authData;