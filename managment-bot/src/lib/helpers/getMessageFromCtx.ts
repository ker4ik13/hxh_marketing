import type { Context } from 'telegraf';
import type { SceneContext, WizardContext } from 'telegraf/scenes';
import type { Message } from 'telegraf/typings/core/types/typegram';

export const getMessageFromCtx = (
  ctx: WizardContext | SceneContext | Context,
): string | null => {
  const text = ctx.message as Message.TextMessage;

  if (text && text.text) {
    return (ctx.message as Message.TextMessage).text;
  }

  return null;
};
