import * as UserInformation from './user-information';

describe('UserInfromation', ()=>{
    it('saves UserInformation', async ()=>{
        expect(await UserInformation.retrieve()).toBeNull();
        const now = new Date().getTime();
        const userInfromation = {
            id: '0',
            name: 'Takeda Shuji',
            mailAddress: 'takeda-shuji@com',
            photoUrl: 'https://example.com/image/photo.png',
            createdAt: now,
            lastLoginAt: now,
        };
        await UserInformation.save(userInfromation);

        const actual = await UserInformation.retrieve();
        expect(actual).toEqual(userInfromation);

        await UserInformation.clear();
        expect(await UserInformation.retrieve()).toBeNull();
    })
})