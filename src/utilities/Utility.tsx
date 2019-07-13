class Utility {
    static classNameBuild = (baseClassNames?: string[], foreignClass?: string): string => {
        const base = baseClassNames ? baseClassNames : []
        const foreign = foreignClass ? foreignClass : []
        const concat = base.concat(foreign)
        return concat.join(' ')
    }
}

export default Utility