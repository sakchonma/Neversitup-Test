
const createProfile = async (data: ICreateProfile) => {
    //function check and save models
    const newProfile: any = new ProfileModel({

    })
    await newProfile.save()
    return {

    }
}