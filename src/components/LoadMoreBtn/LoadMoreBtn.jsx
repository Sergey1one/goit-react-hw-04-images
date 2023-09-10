import { LoadBtn } from "./LoadMoreBtn.styled"


export const LoadMoreBtn = ({ onClick }) => {
    return (
         <LoadBtn type="button" onClick={onClick}>Load more...</LoadBtn>
    )
}