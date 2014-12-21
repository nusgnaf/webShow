//
//  Use a closure to hide the local variables from the
//  global namespace
//
(function () {
    var QUEUE = MathJax.Hub.queue; // shorthand for the queue
    var math = null; // the element jax for the math output.

    window.UpdateMath = function (TeX,id ) {
    //    QUEUE.Push(function () {
        math = MathJax.Hub.getAllJax(id)[0];
    //});
        console.log(math);
        QUEUE.Push(["Text", math, "\\displaystyle{" + TeX + "}"]);
    }
})();