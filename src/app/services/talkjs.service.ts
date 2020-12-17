import { Injectable } from '@angular/core';
import Talk from "talkjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TalkjsService {

  private static APP_ID = "tdwNAj8z";
  private currentTalkUser:Talk.User;
  private currentSessionDeferred = new Deferred<Talk.Session>();
  chat_group_id;
  userInfo;
  constructor(public auth: AuthService) {
    this.auth.activeUserInfo.subscribe(res => this.userInfo = res);
  }
  
  async createTalkUser(user: User): Promise<any> {
    await Talk.ready;
    return new Talk.User({
      id:user.id,
      name:user.name,
      email:null
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    // const applicationUser=this.authService.getCurrentUser();
    const applicationUser = new User(""+this.userInfo.cgd[0].id+this.chat_group_id,this.userInfo.cgd[0].name,null);;
    const talkUser=await this.createTalkUser(applicationUser);
    const session=new Talk.Session({
      appId: TalkjsService.APP_ID,
      me:talkUser
    });    
    this.currentTalkUser=talkUser;
    this.currentSessionDeferred.resolve(session);
  }


  async createChatbox(otherApplicationUSer: User) {
    console.log('came here');
    const session=await this.currentSessionDeferred.promise;
    console.log('came here 45');
    const conversationBuilder=await this.getOrCreateConversation(session,otherApplicationUSer);
    console.log(session.createChatbox(conversationBuilder));
    return session.createChatbox(conversationBuilder);
  }

  async createPopup(otherApplicationUser: User, keepOpen: boolean) {
      const session=await this.currentSessionDeferred.promise;
      const conversationBuilder=await this.getOrCreateConversation(session,otherApplicationUser);
      const popUp=session.createPopup(conversationBuilder,{keepOpen:keepOpen});
      return popUp;
  }

  async getOrCreateConversation(session: Talk.Session, otherApplicationUSer: User) {
    const otherTalkUser=await this.createTalkUser(otherApplicationUSer);
    const id_generated=Talk.oneOnOneId(this.currentTalkUser,otherTalkUser);
    const conversationBuilder=session.getOrCreateConversation(id_generated);
    conversationBuilder.setParticipant(this.currentTalkUser);
    conversationBuilder.setParticipant(otherTalkUser);
    return conversationBuilder;
  }

  async createInbox(): Promise<Talk.Inbox> {
    const session= await this.currentSessionDeferred.promise;
    return session.createInbox();
  }

}


export class Deferred<T> {
  public promise: Promise<T>;
  public resolve: (result: T | PromiseLike<T>) => void;
  public reject: (reason: any) => void;

  constructor() {
      this.promise = new Promise<T>((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
      });
  }

}

export class User {
  id: string;
  name: string;
  email: string;

  constructor(id: string, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
  }
  
}
