import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectManagementService {
    async myFirstService(data:any): Promise<any>{
        try {
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(data)
        }
    }



    
}
