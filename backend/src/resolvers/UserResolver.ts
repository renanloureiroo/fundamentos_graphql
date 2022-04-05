import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { User } from "../model/User"
import crypto from "node:crypto"

@Resolver()
export class UserResolver {
  private data: User[] = []

  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(@Arg("name") name: string) {
    const user = { id: crypto.randomUUID(), name }

    this.data.push(user)
    return user
  }
}
