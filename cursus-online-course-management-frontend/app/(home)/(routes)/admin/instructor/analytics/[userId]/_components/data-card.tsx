import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatPrice } from "@/lib/format";
import { useEffect, useState } from "react";

interface DataCardProps {
  value: number;
  label: string;
  shouldFormat?: boolean;
  onSelectChange: (value: number) => void;
};

const DataCard = ({
  value,
  label,
  shouldFormat,
  onSelectChange,
}: DataCardProps) => {
  const [selectValue, setSelectValue] = useState<number>(1);

  useEffect(() => {
    if (selectValue !== 1) {
      onSelectChange(selectValue);
    }
  }, [selectValue, onSelectChange]);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {label} of last {selectValue} {selectValue > 1 ? "months" : "month"}
        </CardTitle>
        <Select onValueChange={(value) => setSelectValue(parseInt(value))}>
          <SelectTrigger className="w-fit">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              <SelectItem value="1">Last 1 month</SelectItem>
              <SelectItem value="3">Last 3 months</SelectItem>
              <SelectItem value="6">Last 6 months</SelectItem>
              <SelectItem value="9">Last 9 months</SelectItem>
              <SelectItem value="12">Last 1 year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {shouldFormat ? formatPrice(value) : value}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard;
