export interface MemberType {
  memberTypeCd: string;
  memberTypeName: string;
}

export class MemberTypeConvert {
  public static toMemberType(json: string): MemberType {
    return JSON.parse(json);
  }

  public static memberTypeToJson(value: MemberType): string {
    return JSON.stringify(value);
  }
}
