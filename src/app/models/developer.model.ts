import { Skill } from './skill.model';

export class Developer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  bio: string;
  skills: Skill[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    bio: string,
    skills: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skills = skills;
  }
}
