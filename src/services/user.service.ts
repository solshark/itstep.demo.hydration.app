export interface User {
  id: string;
  name: string;
  goal: number;
}
export class UserService {
  private static instance: UserService;
  #user: User = {
    id: "1",
    goal: 2000,
    name: "John Doe",
  };
  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }
    UserService.instance = this;
  }
  get user(): User {
    return this.#user;
  }
}
