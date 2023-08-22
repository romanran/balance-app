import mockedData from '@/data/transactions.json'

interface Params {
    [key: string]: string
}

export class FetchFactory {
    url: string
    constructor(url: string) {
        this.url = url
    }
    async get<T>(params?: Params): Promise<T> {
        return await new Promise<T>((resolve) =>
            setTimeout(() => {
                resolve(mockedData as T)
            }, 200)
        )
    }
    post<T>(params?: Params) {}
}
