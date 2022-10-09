import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
    process.env.REACT_APP_API_URL,
    process.env.REACT_APP_API_KEY
);
export async function signIn({email,password}){
    const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
    });
    if(error)
        throw error;
    return{
        user,
        session
    }
}
export async function signInWithEmail(email){
    const { user, error } = await supabase.auth.signIn({
        email,
    });
    if(error)
        throw error;
    return{
        user,
    }
}
export async function signUp(userData){
    const profileData={...userData};
    delete profileData.password;
    const {user,session,error}=await supabase.auth.signUp({
        email:userData.email,
        password:userData.password,
        },{
            data:profileData
        }    
    );
    if(error)
        throw error;
    let { error: uploadError } = await supabase.storage.from('avatars').upload(userData.imagePath,userData.imageFile);
    if (uploadError) {
        throw uploadError
    }    
    const {userInfo,error2}=await supabase
        .from("Profile")
        .insert([{
            id:user.id,
            type:userData.type,
            data:profileData
        }]);
    if(error2)
        throw error;
    return {session,userInfo};
}
export async function update(id,authData,data,imageFile){
    const { user, error } = await supabase.auth.update({...authData,data:data});
    if(error)
        throw error;
    let { data:newData, error:error2 }=await supabase
        .from("Profile")
        .update({data:data})
        .match({id:id});
    if(error2)
        throw error
    if(imageFile){
        let { error: uploadError } = await supabase.storage.from('avatars').upload(data.imagePath,imageFile);
        if (uploadError) {
            throw uploadError
        }
    }
    return {
        user,newData
    };
}
export async function getProfile(userId){
    const { data, error } = await supabase
        .from('Profile')
        .select('type,data')
        .eq("id",userId);
    if(error)
        throw error;
    return data[0];
}
export async function getProfiles(type){
    const { data,error } = await supabase
        .from("Profile")
        .select("id,data")
        .eq("type",type)
    if(error)
        throw error;
    return data;
}
export async function addActivity(cid,cName,logo,acData){
    const {data,error}=await supabase
        .from("activities")
        .insert([{
            cid,
            logo,
            data:acData,
            cName,
            status:"pending"
        }]);
    if(error)
        throw error;
    return data;
}
export async function getCompanyActivites(cid){
    const { data,error }=await supabase
        .from("activities")
        .select("id,cid,cName,logo,data")
        .eq("cid",cid)
    if(error)
        throw error;
    return data;
}
export async function getActivites(){
    const { data,error }=await supabase
        .from("activities")
        .select("id,cid,cName,logo,data")
        .match({status:"pending"});
    if(error)
        throw error;
    return data;
}
export async function getActivity(actId){
    const { data, error } = await supabase
        .from('activities')
        .select('id,cid,cName,logo,data,status')
        .match({id:actId});
    if(error || !data.length)
        throw error;
    return data[0];
}
export async function updateActivitiesLogo(cid,imagePath){
    const { data,error }=await supabase
        .from("activities")
        .update({logo:imagePath})
        .match({cid});
    console.log(data);
    if(error)
        throw error;
    return data;
}
export async function toggleActivity(actId,newStatus){
    const { data, error } = await supabase
        .from('activities')
        .update({status:newStatus})
        .match({id:actId});
    if(error || !data.length)
        throw error;
    return data;
}
export async function deleteActivity(id){
    const { data,error }=await supabase
        .from("activities")
        .delete()
        .match({id:id})
    if(error)
        throw error;
    return data;
}
export async function deleteActivityApplicants(aid){
    const { data,error } = await supabase
        .from("applicants")
        .delete()
        .match({aid});
    if(error)
        throw error;
    return data;
}
export async function applyToActivity(id,cid,uid,aid,title,reqData){
    const {data,error}=await supabase
        .from("applicants")
        .insert([{
            id,
            cid,
            uid,
            aid,
            title,
            data:reqData,
        }]);
    if(error)
        throw error;
    return data;
}
export async function deleteUserActivity(id){
    const { data, error }=await supabase
        .from("applicants")
        .delete()
        .match({id:id});
    if(error)
        throw error;
    return data;
}
export async function getUserActivities(uid){
    const {data,error}=await supabase
        .from("applicants")
        .select('id,uid,aid,title,data,status')
        .match({uid});
    if(error)
        throw error;
    return data;
}
export async function getApplicants(aid){
    const {data,error}=await supabase
        .from("applicants")
        .select('id,uid,aid,title,data,status')
        .match({aid});
    if(error)
        throw error;
    const applicantsData=await Promise.all(data.map(async applicant=>{
        const [userImage]=await getUserImage(applicant.uid);
        return await { ...applicant, data:{ ...applicant.data,userImage:userImage.imagePath } }
    }));
    return applicantsData;
}
export async function getUserImage(id){
    const { data:userImage, error }=await supabase
        .from("Profile")
        .select(`data->imagePath`)
        .eq("id",id);
    if(error)
        throw error;
    return userImage;
}
export async function ApproveApplicant(id){
    const { data,error }=await supabase
        .from("applicants")
        .update({status:"approved"})
        .match({uid:id});
    if(error)
        throw error;
    return data;
}
