export const makeApiUrl = (path: string): string => {
    return `https://api.github.com/users/${path}/repos`
}
