import {
  ChangeNameEvent as ChangeNameEventEvent,
  TransferEvent as TransferEventEvent
} from "../generated/TransferContract/TransferContract"
import { ChangeNameEvent, TransferEvent } from "../generated/schema"

export function handleChangeNameEvent(event: ChangeNameEventEvent): void {
  let entity = new ChangeNameEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferEvent(event: TransferEventEvent): void {
  let entity = new TransferEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
 