interface IUser {
       name: string | null 
}

export class FakeServer {
     users:IUser[] = []
     
     registration(newUser: IUser) {
             const {name} = newUser;
             const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiWXVyeSJ9.Wkh7C6WYHbNZzNEmcCpftUKAafDVWZCMyw-u3uhUuzs';
                
            return new Promise<object>((resolve, reject) => {
                    if(this.users.length ) {

                        if(   this.users.find((user: IUser) => user.name !== name)) {
                                this.users = [...this.users, newUser]
                                resolve({key: JWT })
                        }  else {
                                reject({data: newUser.name, err: 'this user in base already'})
                        }
                        
                    }  else {
                        this.users = [...this.users, newUser]
                        console.log(this.users)
                        resolve({key: JWT })
                    }
               
            })  
     }
}

const service  = new FakeServer()
export {service}