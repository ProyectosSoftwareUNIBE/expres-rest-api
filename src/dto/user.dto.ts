import {PhotoDto} from "./photo.dto";

export interface UserDto {
    id?: number;
    lastName?: string;
    firstName?: string;
    isActive?: boolean;
    photos?: PhotoDto[]
}
