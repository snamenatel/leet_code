class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) {
        $res = array_fill(1, count($nums), -1);
        foreach($nums as $num) {
            $res[$num] = 1;   
        } 
        $result = [];
        
        foreach($res as $idx => $item) {
            if($item === -1) {
                $result[] = $idx;
            }
        }
        
        return $result;
    }
}