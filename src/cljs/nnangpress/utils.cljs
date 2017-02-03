(ns nnangpress.utils)

(defn index-of
    "return the index of the supplied item, or nil"
    [v item]
    (let [len (count v)]
      (loop [i 0]
        (cond
          (<= len i) nil,
          (= item (get v i)) i
          :else (recur (inc i ))))))

(defn index-of-key-val [s key val]
    (loop [idx 0 items s]
      (cond
        (empty? items) nil
        (= val (key (first items))) idx
        :else (recur (inc idx) (rest items)))))

(defn tree-seq-path [branch? children root & [node-fn]]
  (let [node-fn (or node-fn identity)
        walk (fn walk  [path node]
               (let [new-path (conj path (node-fn node))]
                 (lazy-seq
                   (cons new-path
                         (when (branch? node)
                           (mapcat (partial walk new-path) (children node)))))))]
    (walk [] root)))

(defn string-contains? [x y]
  (not= -1 (.indexOf x y)))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec  (concat  (subvec coll 0 pos)  (subvec coll  (inc pos)))))

(defn uid []
  (.toString (random-uuid)))
