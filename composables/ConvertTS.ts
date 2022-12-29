export const useConvertTS = (datetime: string) => {
    const ts = Date.parse(datetime)
    const now = Date.now()

    // const ts = datetime
    if (now - ts < 30 * 60 * 1000) return 'minutes_ago'
    else if (now - ts < 60 * 60 * 1000) return 'less_hour'
    else if (now - ts < 2 * 60 * 60 * 1000) return 'less_2hour'
    else if (now - ts < 4 * 60 * 60 * 1000) return 'less_4hour'
    else if (now - ts < 8 * 60 * 60 * 1000) return 'less_8hour'
    else if (now - ts < 12 * 60 * 60 * 1000) return 'less_12hour'
    else if (now - ts < 24 * 60 * 60 * 1000) return 'less_day'
    else if (now - ts < 2 * 24 * 60 * 60 * 1000) return 'less_2days'
     return datetime
}