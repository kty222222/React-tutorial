import './App.css';
import Customer from './component/Customer';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
const styles = theme =>({
  root:{
    width: '100%',
    overflowX: "auto"
  },
  table:{
    mindWidth: 500
  }
})
const custom =[
  {
    'id': 1,
    'image': 'https://placeimg.com/640/640/any',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/640/640/any',
    'name': '김태완',
    'birthday': '956222',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/640/640/any',
    'name': '문한울',
    'birthday': '90222',
    'gender': '남자',
    'job': '대학생'
  }
]

function App() {
  return (
      <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {custom.map(c => { 
          return (
            <Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job = {c.job}></Customer>)
          })}
      </TableBody>
      </Table>
      </Paper>
  );
}

export default App;