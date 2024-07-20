--SimpleStorage.hs
import PlutusTx.Prelude
import Plutus.Contract
import PlutusTx
import Ledger
import Ledger.Value
import Playground.Contract


data SimpleStorageDatum = SimpleStorageDatum { datumData :: BuiltinByteString }
PlutusTx.unstableMakeIsData ''SimpleStorageDatum

mkValidator :: SimpleStorageDatum -> () -> ScriptContext -> Bool
mkValidator datum () _ = traceIfFalse "invalid data" (datumData datum == "Hello, Cardano!")

validator :: Validator
validator = mkValidatorScript $$(PlutusTx.compile [|| mkValidator ||])

simpleStorageAddress :: Address
simpleStorageAddress = scriptAddress validator

endpoints :: Contract () EmptySchema Text ()
endpoints = do
  logInfo @String "Starting SimpleStorage contract"