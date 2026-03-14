import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  skills = ['Angular', 'TypeScript', 'CSS'];

  jobs = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];

  getSkills() {
    return this.skills;
  }

  getJobs() {
    return this.jobs;
  }

}