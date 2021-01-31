import { Checkbox as CheckboxAntd, Divider } from "antd";
import { useState, useEffect } from "react";

const CheckboxGroup = CheckboxAntd.Group;

const plainOptions = [
  { label: "List group", value: 1 },
  { label: "Create Group", value: 2 },
  { label: "View Group", value: 3 },
  { label: "Update Group", value: 4 },
  { label: "Create permission", value: 5 },
];

const Checkbox = (props) => {
  const { checkedList, setCheckedList } = props;
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  //When some of button are checked
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  //When alloptions are checked,

  const onCheckAllChange = (e) => {

    let allOptions = [...plainOptions];
    allOptions = allOptions.map((e) => e.value);

    setCheckedList(e.target.checked ? allOptions : []);
    //If haven't checked yet => all selected
    //If already checked => all deselected
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  
  useEffect(() => {
    onChange(checkedList);
  }, [props.checkedList]);
  return (
    <>
      <CheckboxAntd
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </CheckboxAntd>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};
export default Checkbox;
