
const paging = (totalPage) => {
    const arr =[];
    for(let i=1;i<=totalPage;i++){
        arr.push(i);
    }
    return arr;
}
export default paging;