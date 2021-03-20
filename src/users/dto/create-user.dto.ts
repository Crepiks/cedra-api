export default interface CreateUserDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  birthday: string;
  description: string;
  avatar: string;
  avatarPreview: string;
  genderId: number;
  orientationId: number;
}
