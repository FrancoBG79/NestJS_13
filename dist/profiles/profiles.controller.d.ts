import { CreateProfileDto } from "./dto/create-profile.dto";
export declare class ProfilesController {
    findAll(location: string): {
        location: string;
    }[];
    findOne(id: string): {
        id: string;
    };
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
    update(): void;
}
