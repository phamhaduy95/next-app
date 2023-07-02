type AddPros<Base, Props> = Omit<Props, keyof Base> & Base;

type ReplaceProps<Base extends Record<string, unknown>, Props extends { [key in keyof Base]?: unknown }> = Omit<
    Base,
    keyof Props
> &
    Props;

type Prettier<T> = {
    [key in keyof T]: T[key];
};

type ChangePropsValue<
    BaseType extends Record<string, unknown>,
    NewProps extends { [key in keyof BaseType]?: unknown }
> = {
    [key in keyof BaseType]: key extends keyof NewProps ? NewProps[key] : BaseType[key];
};
type People = {
    name: string;
    age: number;
    DOB: Date;
    country: string;
};

type Employer = AddPros<People, { name: number; id: string }>;

type E = Prettier<ChangePropsValue<People, { age: string; country: number; name: 'hello' }>>;

type ArrayType<T> = T extends (infer Item)[] ? Item : T;
// infer only work with generic
type Parts<Path extends string> = Path extends `${infer PartB}` ? PartB : never;
type A = Parts<'abad'>;

function Aaa<T extends string[]>(type: T) {}
