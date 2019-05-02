
export default function sortCategoryBasedPriority(categories) {

    return categories.sort((A,B)=>{
        return B.priority-A.priority;
    })
}