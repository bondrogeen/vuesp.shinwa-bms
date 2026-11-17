import type {
  IDallas,
  IDevice,
  IDiscovery,
  IFiles,
  IMessage,
  IPort,
  IProgress,
  ISettings,
  IBuffer,
  IScan,
  TKey,
  TMessage,
} from '@/generated/protocol';

export type IMessagePort = IPort;
export type IMessageDallas = IDallas;
export type IMessageDiscovery = IDiscovery;
export type IMessageMessage = IMessage;
export type IMessageProgress = IProgress;
export type IMessageDevice = IDevice;
export type IMessageScan = IScan;
export type IMessageFile = IFiles;
export type IMessageBuffer = IBuffer;
export type IShinwaDevice = IDevice;
export type IMyMessageSettings = ISettings;
export type TTypeMessage = TMessage;
export type TTypeSend = (key: TKey | number, object?: object) => void;
export type TMyTypeKEYS = TKey;
