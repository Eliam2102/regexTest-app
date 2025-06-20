export interface CardRecordProps {
  regex: string; //esto esta aqui poruqe con esto tipamos a que la tarjeta de historai solo pueda recibir la regex 
  date: string; //la fehca en la que se realizo
  onPress: () => void; //el evetno para uqe sea clickeable
}
