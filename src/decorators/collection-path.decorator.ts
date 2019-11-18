import 'reflect-metadata';

export function CollectionPath(path: string): any {
  return (target: Object) => {
    Reflect.defineMetadata('mustachePath', path, target);
  };
}
