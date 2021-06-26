initSidebarItems({"struct":[["SatisfiedWaitCondition","A type wrapper that guarantees a given condition has been met before allowing one task to notify (wake up) other `Task`s waiting on a `WaitCondition`. See the `condition_satisfied()` method."],["WaitCondition","A condition variable that allows multiple `Task`s to wait for a condition to be met, upon which other `Task`s can notify them. This is effectively a convenience wrapper around `WaitQueue::wait_until()`."]],"traitalias":[["WaitConditionFn","The closure type that can be used within a `WaitCondition`: a parameterless function that returns a bool indicating whether the condition is met."]]});