import * as plugin from '@automapper/classes/transformer-plugin';

export const name = '@automapper/classes/transformer-plugin';
export const version = 1;

export const factory = (cs) => {
  return plugin.before({ modelFileNameSuffix: ['.dto.ts'] }, cs.program);
};
