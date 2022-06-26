import { MemberType } from '../../data/member-type';

interface Props {
  index: number;
  memberType: MemberType;
}

const ListElement = (props: Props) => {
  const { index, memberType } = props;
  return (
    <>
      <h2>
        {index} : {memberType.memberTypeName}
      </h2>
    </>
  );
};

export default ListElement;
