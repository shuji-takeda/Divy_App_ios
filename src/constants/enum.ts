export enum Prefecture{
    北海道,
    青森,
    岩手,
    宮城,
    秋田,
    山形,
    福島,
    茨城,
    栃木,
    群馬,
    埼玉,
    千葉,
    東京,
    神奈川,
    新潟,
    富山,
    石川,
    福井,
    山梨,
    長野,
    岐阜,
    静岡,
    愛知,
    三重,
    滋賀,
    京都,
    大阪,
    兵庫,
    奈良,
    和歌山,
    鳥取,
    岡山,
    広島,
    山口,
    徳島,
    香川,
    愛媛,
    高知,
    福岡,
    佐賀,
    長崎,
    熊本,
    大分,
    宮崎,
    鹿児島,
    沖縄
}

export enum TagsEnums{

    fleshWater,
    seaWater, 
    drySuit,
    wetSuit,
    sunny,
    rainny,
    cloudy,
    beach,
    boat,
    fanDive,
    refresh,
    classes,
    useRental,
    noUseRental,
    usePickUp,
    noUsePickUp,
    useGuestHouse,
    solo,
    withFriends,

}

export function exchange(code:number){
    var value;
    switch(code){
        case 0:
            value = '淡水' 
        break;

        case 1:
            value = '海水'
        break;

        case 2:
            value = 'ドライスーツ'
        break;

        case 3:
            value = 'ウェットスーツ'
        break;

        case 4:
            value = '晴れ'
        break;

        case 5:
            value = '雨'
        break;

        case 6:
            value = '曇り'
        break;

        case 7:
            value = 'ビーチエントリー'
        break;

        case 8:
            value = 'ボートエントリー'
        break;

        case 9:
            value = 'ファンダイブ'
        break;

        case 10:
            value = 'リフレッシュダイブ'
        break;

        case 11:
            value = '講習ダイブ'
        break;

        case 12:
            value = 'レンタル有'
        break;

        case 13:
            value = 'レンタル無'
        break;

        case 14:
            value = '送迎有'
        break;

        case 15:
            value = '送迎無'
        break;

        case 16:
            value = 'ゲストハウス併設'
        break;

        case 17:
            value = '一人で'
        break;

        case 18:
            value = '友達と'
        break;
    }

    //選択された値を元に日本語を返却
    return value;
}

export enum sex {
    男,
    女,
}