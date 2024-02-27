import dbConfig from ('../db/user.json');

export async function getUserDetails(userId){
    try {
        const isExist = dbConfig.every((items)=> items?.userId == userId);
        if(!isExist){
            return {
                message : `This User Id Not exist in database ${userId}`
            }
        }
    const payload = dbConfig.filter((item)=> item?.userId == userId);
    return {
        data : payload,
        message : "sucessfull..."
    }

    } catch (error) {
        return {
            message: `Something went wrong for UserId ${userId}`
        }
    }
}
