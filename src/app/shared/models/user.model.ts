export class User {
  private _id: string;
  username: string;
  roles: Array<string>;
  createdAt: Date;
  updatedAt: Date;

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  constructor(
    id: string,
    username: string,
    roles: Array<string>,
    createdAt: Date,
    updatedAt: Date
  ) {
    this._id = id;
    this.username = username;
    this.roles = roles;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  checkRole(role: string): boolean {
    return this.roles.includes(role);
  }
}
