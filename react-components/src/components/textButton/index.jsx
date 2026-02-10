function TextButton(params) {
  console.log(params);

  let obj = {
    name: 'João',
    age: 30,
    address: 'Rua Joao Pedro, 123',
    phoneNumber: '123456789',
  };

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.address);
  console.log(obj.phoneNumber);

  let { name, age, address, phoneNumber } = obj;

  console.log(name);
  console.log(age);
  console.log(address);
  console.log(phoneNumber);

  return <button type="button">{params.label}</button>;
}
export default TextButton;
