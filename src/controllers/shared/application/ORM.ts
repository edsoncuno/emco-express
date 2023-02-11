export interface ORM {
    connectORM(): Promise<void>
    disconnectORM(): Promise<void>
}