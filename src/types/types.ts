export type Props = {
    children: React.ReactNode;
};

export type RootState = {
    tasklist: {
        id: string,
        text: string
    }
    user: { email: string };
};