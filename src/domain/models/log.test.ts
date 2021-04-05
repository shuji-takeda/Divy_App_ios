import sleep from 'lib/sleep';
import * as Log from './log';

const ISO8601_PATTERN = /^¥d{4}-¥d{2}-¥d{2}T¥d{2}:¥d{2}:¥d{2}¥d{3}Z$/u;
const date = new Date()
const tags = ['1','2','3','4','5']
const photoUrl = ['https://1','https://2']

describe('Log', ()=>{
    describe('factory', ()=>{
        it('returns an instance of log model', ()=>{
            const log = Log.factory({
                title: 'Try building apps with React Native',
                diveNo: 82,
                date: date,
                prefecture: 'kushimoto',
                divingSpot: 'beach',
                inTime: '10:22',
                outTime: '11:02',
                startPressure: '',
                finishPressure: '',
                maxDepth: '',
                aveDepth: '',
                diveTime: '',
                tempreture: '',
                waterTempreture: '',
                weigth: '',
                tags: tags,
                photourl: photoUrl,
                detail: 'Build Hello World App',
            });

            expect(log.id.length).toBe(36);
            expect(log.title).toBe('Try building apps with React Natvie');
            expect(log.detail).toBe('Build Hello World App');
            expect(log.createdAt).toEqual(expect.stringMatching(ISO8601_PATTERN));
            expect(()=> new Date(log.createdAt)).not.toThrow();
            expect(log.updateAt).toEqual(expect.stringMatching(ISO8601_PATTERN));
            expect(()=> new Date(log.updateAt)).not.toThrow();
            expect(log.createdAt).toEqual(log.updateAt);
        })
    })
})

describe('change', () => {
    it('returns an intstance of Log model that have specified titles and details',
    async() => {
        const log = Log.factory({
            title: 'Try',
            diveNo: 82,
            date: date,
            prefecture: 'kushimoto',
            divingSpot: 'beach',
            inTime: '10:22',
            outTime: '11:02',
            startPressure: '',
            finishPressure: '',
            maxDepth: '',
            aveDepth: '',
            diveTime: '',
            tempreture: '',
            waterTempreture: '',
            weigth: '',
            tags: tags,
            photourl: photoUrl,
            detail: 'Build App',
        });
        expect(log.title).toBe('Try')
        
        await sleep(10);
        const changed = Log.change(log, {
            title: 'chagne',
            date: new Date()
        })
        expect(changed.title).toBe('change');
        expect(changed.date).toBe(new Date())
        expect(new Date(changed.updateAt).getTime()).toBeGreaterThan(new Date(changed.createdAt).getTime())
    })
})
